from run import app
import data
from flask import render_template, url_for, send_file

@app.route('/')
def main():
    return render_template('index.html')


@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html', education=data.education)

@app.route('/experience')
def experience():
    return render_template('experience.html', experience=data.experience)

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/resume', methods=['GET'])
def resume():
    path = 'static/pdf/ResumeFeb2020.pdf'
    return send_file(path, as_attachment=True)

