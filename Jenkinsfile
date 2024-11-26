@Library('Jenkins-mySharedLibrary') _

pipeline {
    agent any

   parameters {
        string defaultValue: 'main', name: 'branchName'
    }

    //see if githwebhookworksgit
    environment {

        IMAGE_NAME = 'saeedxdev/node-app-1'
        VALUE_FILE = 'app1-values.yaml'
        HELM_DEP_NAME = 'helm-node-app1'
        IMAGE = 'node-app-1'
        CREDENTIAL_ID = "saeedxdev"
        APP_KEY="Node-App-1"
    }

    stages {


        stage('Build and Deploy') {
            steps {

                script {
                    dockerHelmTask.call(env.CREDENTIAL_ID,env.IMAGE,env.VALUE_FILE,env.HELM_DEP_NAME,env.APP_KEY)
                }

            }
        }

    }
}