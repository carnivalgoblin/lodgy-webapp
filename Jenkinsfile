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
        NODEJS_VERSION = 'node-20'
    }

     tools {
         nodejs "${NODEJS_VERSION}"
     }

    stages {
        stage('Checkout Stack File') {
            steps {
                script {
                    checkout([$class: 'GitSCM',
                        branches: [[name: "*/${REPO_BRANCH}"]],
                        userRemoteConfigs: [[url: "${REPO_URL}", credentialsId: 'gh']]
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
