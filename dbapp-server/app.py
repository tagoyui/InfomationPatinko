from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
cors = CORS(app)


@app.route('/shopes', methods=['GET'])
def get_shopes():
    conn = sqlite3.connect("shopes.db")
    conn.row_factory = sqlite3.Row
    result = conn.execute("select * from shopes limit 1")
    header = result.fetchone().keys()
    data = []
    result = conn.execute('SELECT * FROM shopes')
    for row in result:
        item = dict()
        for h_i, h in enumerate(header):
            item[f"{h}"] = row[h_i]
        data.append(item)

    return jsonify(data)


@app.route('/patinkos', methods=['GET'])
def get_patinkos():
    conn = sqlite3.connect("patinkos.db")
    conn.row_factory = sqlite3.Row
    result = conn.execute("select * from patinkos limit 1")
    header = result.fetchone().keys()
    data = []
    result = conn.execute('SELECT * FROM patinkos')
    for row in result:
        item = dict()
        for h_i, h in enumerate(header):
            item[f"{h}"] = row[h_i]
        data.append(item)

    return jsonify(data)

@app.route('/slots', methods=['GET'])
def get_slots():
    conn = sqlite3.connect("slots.db")
    conn.row_factory = sqlite3.Row
    result = conn.execute("select * from slots limit 1")
    header = result.fetchone().keys()
    data = []
    result = conn.execute('SELECT * FROM slots')
    for row in result:
        item = dict()
        for h_i, h in enumerate(header):
            item[f"{h}"] = row[h_i]
        data.append(item)

    return jsonify(data)




