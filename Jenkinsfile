@Library('pro_utils') _

pipeline {
    agent any
    environment {
        IMAGE_NAME = 'lodgy-webapp'
        DOCKER_REGISTRY = 'docker.local'
        PORTAINER_URL = 'http://192.168.86.31:9000/api'
        STACK_NAME = 'lodgy'
        STACK_FILE_PATH = 'lodgy.yml'
        REPO_URL = 'git@github.com:carnivalgoblin/docker-compose.git'
        REPO_BRANCH = 'main'
        ENDPOINT_ID = '2'
    }

    stages {
        stage('Checkout Stack File') {
            steps {
                script {
                    checkout([$class: 'GitSCM',
                        branches: [[name: "*/${REPO_BRANCH}"]],
                        userRemoteConfigs: [[url: "${REPO_URL}", credentialsId: 'carnivalgoblin']]
                    ])
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    buildDockerImage("${DOCKER_REGISTRY}/${IMAGE_NAME}")
                }
            }
        }

        stage('Deploy Frontend Stack') {
            steps {
                script {
                  def apiKey = credentials('portainer-api-key')
                    portainerLib.updateStack("${WORKSPACE}/${STACK_FILE_PATH}", STACK_NAME, PORTAINER_URL, apiKey, ENDPOINT_ID)
                }
            }
        }
    }

    post {
        success {
            echo 'Frontend deployment was successful!'
        }
        failure {
            echo 'Frontend deployment failed.'
        }
    }
}
