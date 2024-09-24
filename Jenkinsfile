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

        stage('Check Files') {
            steps {
                script {
                    // List files in the backend
                    sh 'pwd'
                    sh 'ls -la'
                    // List files in the docker-compose checkout
                    dir('docker-compose-checkout') {
                        sh 'ls -la'
                    }
                }
            }
        }

        stage('Copy lodgy.yml') {
            steps {
                script {
                    // Copy lodgy.yml to the backend directory
                    sh 'cp docker-compose-checkout/lodgy.yml ./'
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
