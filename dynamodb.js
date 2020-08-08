var req = [
  {
      'question': 'You can use _____ to migrate data from a relational database or MongoDB to a DynamoDB table '
      , 'optiona': 'Snapshots',
      'optionb': 'AWS Database Migration Service (AWS DMS)',
      'optionc': ' both',
      'optiond': 'none',
      'answer': 'b',
      'info': '<a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"> Read More </a> '

  }, {
        'question': 'What is the default value of maximum Global Secondary Key '
        , 'optiona': '5',
        'optionb': '20',
        'optionc': ' 1',
        'optiond': 'none',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html"> Read More </a> '

    }, {
          'question': 'Which of the following operations let you create and manage DynamoDB tables. They also let you work with indexes, streams, and other objects that are dependent on tables. '
          , 'optiona': 'Data plane',
          'optionb': 'Control Plane',
          'optionc': ' DynamoDB Streams',
          'optiond': 'none',
          'answer': 'b',
          'info': '<a href = "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.API.html"> Read More </a> '

      },{
          'question': 'Which of the following operations let you perform create, read, update, and delete (also called CRUD) actions on data in a table. '
          , 'optiona': 'Data plane',
          'optionb': 'Control Plane',
          'optionc': ' DynamoDB Streams',
          'optiond': 'none',
          'answer': 'a',
          'info': '<a href = "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.API.html"> Read More </a> '

      }, {
        'question': '_______is a data structure that your application uses to retrieve the records from the stream '
        , 'optiona': ' record ',
        'optionb': 'shard iterator',
        'optionc': ' both',
        'optiond': 'none',
        'answer': 'b',
        'info': '<a href = "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.API.html"> Read More </a> '

    },{
        'question': 'Which of the following types are supported by dynamodb  '
        , 'optiona': 'Scalar Types ',
        'optionb': 'Document Types ',
        'optionc': ' Set Types',
        'optiond': 'All of the Above',
        'answer': 'd',
        'info': '<a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html"> Read More </a>'

    },{
        'question': 'DynamoDB item size limit is  '
        , 'optiona': '1 MB ',
        'optionb': '100 KB ',
        'optionc': ' 400 KB',
        'optiond': 'None of the Above',
        'answer': 'c',
        'info': '<a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html"> Read More </a>'

    },{
        'question': 'What is the correct statment '
        , 'optiona': 'Local index only provides eventually consistent reads',
        'optionb': 'Local Index can be modified',
        'optionc': ' Global Index can be modified',
        'optiond': 'none',
        'answer': 'c',
        'info': 'Global Index Can be modified '

    },
    {
        'question': 'Server side encryption while creating the table',
        'optiona': 'Default : key owned by dynamodb , i.e. no charges ',
        'optionb': 'KMS Customer Managed , created/managed by customer',
        'optionc': ' AWS managed KMS  ',
        'optiond': ' All ',
        'answer': 'd',
        'info': '  all options available for user to choose'
    },
    {
        'question': 'Chosse the correct options ',
        'optiona': ' LSI can be created without a Sort Key',
        'optionb': ' LSI can have a different partition key from the table ',
        'optionc': ' LSI support both strongly consistent read and eventually consistent read',
        'optiond': ' More than 5 LSI per table is allowed ',
        'answer': 'c',
        'info': '  To specify which type of consistency you want, use the ConsistentRead parameter of the Query operation'
    },
    {
        'question': ` Which is the LSI sort key   {\n
            "TableName": "Thread",\n
            "IndexName": "LastPostIndex",
            "ConsistentRead": false,
            "ProjectionExpression": "Subject, LastPostDateTime, Replies, Tags",
            "KeyConditionExpression":
                "ForumName = :v_forum and LastPostDateTime between :v_start and :v_end",
            "ExpressionAttributeValues": {
                ":v_start": {"S": "2015-08-31T00:00:00.000Z"},
                ":v_end": {"S": "2015-11-31T00:00:00.000Z"},
                ":v_forum": {"S": "EC2"}
            }
        } `,
        'optiona': 'ForumName',
        'optionb': 'LastPostDateTime',
        'optionc': 'Subject',
        'optiond': 'Replies',
        'answer': 'b',
        'info': ' LSI partition key is table partition key and sort key should be the one used for query since the query is using an index'
    }
    ,
    {
        'question': 'Examples of Throttling  ',
        'optiona': ' exceeding set provisioned capacity',
        'optionb': ' partitions splitting',
        'optionc': 'Table index capacity mismatch',
        'optiond': 'All',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': ' A single Scan request can retrieve a maximum of ______ of data. ',
        'optiona': ' 4MB ',
        'optionb': ' 8MB ',
        'optionc': ' 4KB',
        'optiond': ' 1MB',
        'answer': 'd',
        'info': '1 MB'
    },
    {
        'question': ' If you Scan a Local secondary index DynamoDB consumes read capacity units from ',
        'optiona': ' The indexs provisioned read capacity. ',
        'optionb': ' The base tables provisioned read capacity',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': 'snapshots are only available through the Amazon EC2 API. '
    },
    {
        'question': ' What is the maximum throughput I can provision for a single DynamoDB table ',
        'optiona': ' 1 RCU and 1 WCU',
        'optionb': ' 25 RCU and 25 WCU',
        'optionc': ' 30000 RCU and 30000 WCU ',
        'optiond': ' Unlimited ',
        'answer': 'd',
        'info': 'You are billed by the hour for that throughput capacity '
    }    ,
    {
        'question': ' Amazon DynamoDB stores data in ___________ ',
        'optiona': ' key values ',
        'optionb': ' partitions ',
        'optionc': ' buckets ',
        'optiond': ' none ',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': ' What is a Global Table ',
        'optiona': ' Multi Region Table ',
        'optionb': ' a table with Global Secondary Index ',
        'optionc': ' table in multiple availability zones ',
        'optiond': ' none ',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': ' For dynamodb What service delivers fast response times for accessing eventually consistent data. ',
        'optiona': ' DAX Dynamo Db Accelerator ',
        'optionb': ' ElastiCache',
        'optionc': ' both ',
        'optiond': ' none ',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': 'ElastiCache is a managed service providing  the following engine  ',
        'optiona': 'memcached',
        'optionb': 'Redis',
        'optionc': 'both',
        'optiond': 'None',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': 'Which service is a key-value stores which are typically used as a cache in front of durable data store such as DynamoDB  ',
        'optiona': ' DAX Dynamo Db Accelerator ',
        'optionb': ' ElastiCache',
        'optionc': ' both ',
        'optiond': ' none ',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': 'Which caching solution requires no code changes  ',
        'optiona': ' DAX Dynamo Db Accelerator ',
        'optionb': ' ElastiCache',
        'optionc': ' both ',
        'optiond': ' none ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': 'Redis, which stands for Remote Dictionary Server, is a fast, open-source, in-memory key-value data store for use as a ',
        'optiona': ' database and cache ',
        'optionb': ' message broker',
        'optionc': ' queue ',
        'optiond': ' All ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' How does dynamodb autoscales in Provisioned Mode ',
        'optiona': ' Automatically ',
        'optionb': ' Use auto scaling to define upper limit and lower limit ',
        'optionc': ' Both  ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' How does dynamodb autoscales in Provisioned Mode ',
        'optiona': ' Automatically ',
        'optionb': ' Use auto scaling to define upper limit and lower limit ',
        'optionc': ' Both  ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': 'In which mode you dont need to specify how much read and write throughput you expect your application to perform. ',
        'optiona': '  Provisioned ',
        'optionb': ' On Demand',
        'optionc': ' Both  ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': 'suppose that you create a provisioned table with 6 read capacity units and 6 write capacity units. With these settings, your application could Perform strongly consistent reads of up to ',
        'optiona': '  48 KB per second ',
        'optionb': '  24 KB per second',
        'optionc': ' 12 KB per second  ',
        'optiond': ' 6 KB per second ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': 'suppose that you create a provisioned table with 6 read capacity units and 6 write capacity units. With these settings, your application could Perform eventually  consistent reads of up to ',
        'optiona': '  48 KB per second ',
        'optionb': '  24 KB per second',
        'optionc': ' 12 KB per second  ',
        'optiond': ' 6 KB per second ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': 'suppose that you create a provisioned table with 6 read capacity units and 6 write capacity units. With these settings, your application could Perform transactional  consistent reads of up to ',
        'optiona': '  48 KB per second ',
        'optionb': '  24 KB per second',
        'optionc': ' 12 KB per second  ',
        'optiond': ' 6 KB per second ',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': 'suppose that you create a provisioned table with 6 read capacity units and 6 write capacity units. With these settings, your application could Perform Write up to ',
        'optiona': '  48 KB per second ',
        'optionb': '  24 KB per second',
        'optionc': ' 12 KB per second  ',
        'optiond': ' 6 KB per second ',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': 'suppose that you create a provisioned table with 6 read capacity units and 6 write capacity units. With these settings, your application could transactional write requests up to ',
        'optiona': '  3 KB per second ',
        'optionb': '  24 KB per second',
        'optionc': ' 12 KB per second  ',
        'optiond': ' 6 KB per second ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': 'Reserved capacity is available in ',
        'optiona': '  on-demand mode. ',
        'optionb': '  provisioned mode',
        'optionc': ' Both  ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' Which stream is an ordered flow of information about changes to items in a DynamoDB table.',
        'optiona': ' Both ',
        'optionb': ' Kinesis',
        'optionc': ' DynamoDB stream  ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': 'DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table and stores this information in a log for up to ',
        'optiona': ' 24 Hrs ',
        'optionb': '  48 Hrs',
        'optionc': ' 1 week ',
        'optiond': ' 2 weeks ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': '__________ are helpful in cases where multiple users attempt to modify the same item',
        'optiona': ' Conditional Writes ',
        'optionb': '  Atomic Counters',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.AtomicCounters"> Read More </a>'
    },
    {
        'question': 'Minimum throughput of Dynamodb Table ',
        'optiona': ' 5',
        'optionb': ' 1',
        'optionc': ' 2 ',
        'optiond': ' 3 ',
        'answer': 'b',
        'info': '  <a href="https://aws.amazon.com/dynamodb/faqs/"> Read More </a>'
    },
    {
        'question': 'How do you manage throughput capcity automatically',
        'optiona': ' inbuild scaling',
        'optionb': ' Auto Scaling Group and Cloudwatch',
        'optionc': ' both  ',
        'optiond': ' none ',
        'answer': 'b',
        'info': '  <a href="https://aws.amazon.com/dynamodb/faqs/"> Read More </a>'
    }
];

var title = "DynamoDB"
