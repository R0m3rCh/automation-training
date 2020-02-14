pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                dir('calculator') {
                  bat 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                dir('calculator') {
                  bat 'npm test'
                }
            }
        }
        stage('Reports') {
            steps {
                echo 'Reporting....'
            }
        }
    }
}
