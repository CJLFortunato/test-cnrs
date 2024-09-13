pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install --force'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
    }
}