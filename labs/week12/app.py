#!/usr/bin/env python

from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="nuh-uh",
        database="webapp_db"
        )

cursor = db.cursor()

@app.route("/orders", methods=["GET"])
def get_orders():
    cursor.execute("""
        select users.name, orders.product_name, orders.order_date from users inner join orders on users.id = orders.user_id;
    """)
    result = cursor.fetchall()
    return jsonify(result)

@app.route("/add_user", methods=["POST"])
def add_user():
    data = request.json
    cursor.callproc("AddUser", (data["name"], data["email"]))
    db.commit()
    return jsonify({"message": "User added successfully"})

@app.route("/add_order", methods=["POST"])
def add_order():
    data = request.json
    try:
        db.start_transaction()
        cursor.execute("insert into users (name, email) values (%s, %s)", (data["name"], data["email"]))
        user_id = cursor.lastrowid
        cursor.execute("insert into orders (user_id, product_name) values (%s, %s)", (user_id, data["product"]))
        db.commit()
        return jsonify({"message": "Order placed successfully"})
    except Exception as e:
        db.rollback()
        return jsonify({"error": f"Transation failed: {e}"})

if __name__ == "__main__":
    app.run(debug=True)
