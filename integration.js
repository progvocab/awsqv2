var req = [
    {
        'question': 'Which is the correct statment '
        , 'optiona': 'Decider implements application business logic',
        'optionb': 'Amazon SWF helps developers build, run, and scale background jobs that have parallel or sequential steps',
        'optionc': ' Amazon SWF promotes a separation between the control flow of your background jobs stepwise logic and the actual units of work that contain your unique business logic',
        'optiond': 'All',
        'answer': 'd',
        'info': '  '

    }, {
        'question': ' Which is not the correct statment  ',
        'optiona': 'With SWF it easy to build applications that perform work across many machines',
        'optionb': 'workflows in different domains cannot interact.',
        'optionc': 'Lambda function cannot be called using AWS SDK',
        'optiond': 'None',
        'answer': 'c',
        'info': 'Both'
    },
    {
        'question': ' What are the Use Cases of SWF ',
        'optiona': 'Video Encoding',
        'optionb': ' Data Centre Migration',
        'optionc': ' Different batches which needs to processed concurrently  ',
        'optiond': 'All ',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': ' A workflow is a set of ______ that carry out some objective, together with logic them ',
        'optiona': ' deciders',
        'optionb': 'activities ',
        'optionc': 'Domain',
        'optiond': 'Task',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' What is flow framework ',
        'optiona': 'The AWS Flow Framework is a collection of convenience libraries that make it faster and easier to build applications with Amazon Simple Workflow.',
        'optionb': 'Using the AWS Flow Framework, you write simple code and let the frameworks pre-built objects and classes handle the details of Amazon Simple Workflow APIs',
        'optionc': 'The AWS Flow Framework is Java open source, and developed and managed by AWS',
        'optiond': 'All',
        'answer': 'd',
        'info': 'All'
    }
    ,
    {
        'question': ' Activity workers use _______ to get new activity tasks ',
        'optiona': 'RecordActivityTaskHeartbeat',
        'optionb': ' RespondActivityTaskFailed  ',
        'optionc': 'RespondActivityTaskCompleted',
        'optiond': 'PollForActivityTask',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': 'Regarding SQS , Which is the correct statment '
        , 'optiona': 'FIFO is ordered',
        'optionb': 'FIFO is unordered',
        'optionc': 'Standard is ordered',
        'optiond': 'none',
        'answer': 'a',
        'info': 'FIFO is ordered '

    }, {
        'question': ' Which is the correct statment  ',
        'optiona': 'visibility timeout can be set at message level',
        'optionb': 'visibility timeout can be set at Queue level',
        'optionc': 'Both',
        'optiond': 'None',
        'answer': 'c',
        'info': 'Both'
    },
    {
        'question': 'Regarding SNS , Which is the correct statment '
        , 'optiona': 'Only HTTP, HTTPS, Email, Email-Json, Amazon SQS, Application, AWS Lambda, SMS are supported protocols in SNS',
        'optionb': ' AWS Supports these Management Tool Services: Cloud Watch, Cloud Trail, Cloud Formation, Trusted Advisor, Config, OpsWorks, ServiceCatalog',
        'optionc': 'You can create up to five trails per region',
        'optiond': 'All',
        'answer': 'd',
        'info': ' '

    },
    {
        'question': ' Which service send message to a Topic ',
        'optiona': 'SQS',
        'optionb': 'SNS',
        'optionc': 'SWF',
        'optiond': 'MQ',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': '  Which is an app that can initiate workflow  ',
        'optiona': ' Active Worker',
        'optionb': ' Workflow Decider',
        'optionc': ' Workflow starter',
        'optiond': 'None',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': ' Which one decides the workflow action in a given situation and sets next set of action   ',
        'optiona': ' Active Worker',
        'optionb': ' Workflow Decider',
        'optionc': ' Workflow starter',
        'optiond': 'None',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': ' Who does the job  ',
        'optiona': ' Active Worker',
        'optionb': ' Workflow Decider',
        'optionc': ' Workflow starter',
        'optiond': 'None',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': 'Which is the correct statment '
        , 'optiona': 'Decider implements application business logic',
        'optionb': 'Amazon SWF helps developers build, run, and scale background jobs that have parallel or sequential steps',
        'optionc': ' Amazon SWF promotes a separation between the control flow of your background jobs stepwise logic and the actual units of work that contain your unique business logic',
        'optiond': 'Lambda function cannot be triggered by Cloudwatch and Cloud trail or calling diectly from API',
        'answer': 'a',
        'info': ' Lambda is serverless '

    }, {
        'question': ' Which is not the correct statment  ',
        'optiona': 'With SWF it easy to build applications that perform work across many machines',
        'optionb': 'Lambda function cannot be called using api gateway',
        'optionc': 'Lambda function cannot be called using AWS SDK',
        'optiond': 'None',
        'answer': 'c',
        'info': 'Both'
    },
    {
        'question': ' What are the Use Cases of Step Functions  ',
        'optiona': ' machine learning model training',
        'optionb': ' report generation',
        'optionc': '  IT automation ',
        'optiond': 'All ',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': ' is a serverless event bus that makes it easy to connect applications together using data from your own applications, integrated Software-as-a-Service (SaaS) applications, and AWS services.  ',
        'optiona': ' AWS MQ',
        'optionb': ' Aws App Flow',
        'optionc': ' Amazon EventBridge   ',
        'optiond': 'Simple Queue Service ',
        'answer': 'c',
        'info': ' <a href="https://aws.amazon.com/eventbridge/"> Read More </a>'
    }
];

var title = "Integration"
