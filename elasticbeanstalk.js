var req = [
     {
        'question': ' If your AWS Elastic Beanstalk application performs operations or workflows that take a long time to complete, you can offload those tasks to a dedicated_________  ',
        'optiona': ' Web environment',
        'optionb': 'Worker environment',
        'optionc': 'Both',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': 'Decoupling your web application front end from a process that performs blocking operations is a common way to ensure that your application stays responsive under load.'
    }
,{
   'question': ' You design these worker instances to take items from the queue only when they have capacity to run them, preventing them from becoming overwhelmed. Which service is used for this',
   'optiona': ' SNS ',
   'optionb': 'AWS MQ',
   'optionc': 'Amazon SQS queue',
   'optiond': 'None of the above',
   'answer': 'c',
   'info': 'Elastic Beanstalk worker environments simplify this process by managing the Amazon SQS queue and running a daemon process on each instance that reads from the queue for you.'
}
,{
   'question': ' For immutable update, If an immutable environment update fails, the rollback process requires __________ ',
   'optiona': ' rolling update to roll back to the previous configuration ',
   'optionb': 'terminating an Auto Scaling group',
   'optionc': 'Both',
   'optiond': 'None of the above',
   'answer': 'b',
   'info': ' Immutable environment updates ensure that configuration changes that require replacing instances are applied efficiently and safely. '
}
  ];

    var title = "Elastic Bean stalk";
