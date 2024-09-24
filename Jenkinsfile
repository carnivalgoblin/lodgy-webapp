@Library('pro_utils') _

pipeline {
    agent any
    environment {
        IMAGE_NAME = 'lodgy-webapp'
        DOCKER_REGISTRY = 'docker.local'
        PORTAINER_URL = 'http://192.168.86.31:9000/api'
        STACK_NAME = 'lodgy'
        REPO_URL_FRONTEND = 'git@github.com:carnivalgoblin/lodgy-webapp.git'
        REPO_URL_COMPOSE = 'git@github.com:carnivalgoblin/docker-compose.git'
        REPO_BRANCH_FRONTEND = 'master' // Change as necessary
        REPO_BRANCH_COMPOSE = 'main' // Change as necessary
        ENDPOINT_ID = '2'
        NODEJS_VERSION = 'node-20'
    }

     tools {
         nodejs "${NODEJS_VERSION}"
     }

    stages {
        stage('Checkout Frontend') {
                    steps {
                        checkout([$class: 'GitSCM',
                            branches: [[name: "*/${REPO_BRANCH_FRONTEND}"]],
                            userRemoteConfigs: [[url: "${REPO_URL_FRONTEND}", credentialsId: 'gh']]
                        ])
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
                    echo 'Frontend image build was successful!'
                }
                failure {
                    echo 'Frontend image build failed.'
                }
            }
        }
