#!/usr/bin/env python
import mysql.connector
from flask import Flask, jsonify

app: Flask = Flask(__name__)

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="nuh-uh",
    database="webapp_db"
)

cursor = conn.cursor()

try:
    @app.route('/users', methods=["GET"])
    def users():
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
        return jsonify(users)
    
    app.run()
except KeyboardInterrupt:
    conn.close()
