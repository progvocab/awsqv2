var req = [
     {
        'question': 'Which caching strategy loads data into the cache only when necessary  ',
        'optiona': 'Lazy Loading',
        'optionb': 'Write-Through',
        'optionc': 'Write-Through with TTL',
        'optiond': 'All of the above',
        'answer': 'a',
        'info': 'Whenever your application requests data, it first makes the request to the ElastiCache cache. If the data exists in the cache and is current, ElastiCache returns the data to your application. If the data doesn\'t exist in the cache or has expired, your application requests the data from your data store'
    },{
       'question': ' What is the use cases for Amazon ElastiCache  ',
       'optiona': 'Database Caching ',
       'optionb': 'Session Store ',
       'optionc': 'Both',
       'optiond': 'None',
       'answer': 'c',
       'info': '<a href="https://aws.amazon.com/getting-started/hands-on/building-fast-session-caching-with-amazon-elasticache-for-redis/3/"> Read More </a>'
   },{
       'question': '_____ acts as a container for engine configuration values that are applied to one or more DB instances.  ',
       'optiona': ' option group ',
       'optionb': 'DB parameter group',
       'optionc': 'both',
       'optiond': 'None',
       'answer': 'b',
       'info': '<a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithOptionGroups.html">Read more </a>'
   },{
      'question': '_____ are available for a particular Amazon RDS DB instance ',
      'optiona': ' option group ',
      'optionb': 'DB parameter group',
      'optionc': 'both',
      'optiond': 'None',
      'answer': 'a',
      'info': '<a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithOptionGroups.html">Read more </a>'
  },{
     'question': '_____ can\'t be removed from an option group while DB instances are associated with the option group ',
     'optiona': ' Persistent options  ',
     'optionb': 'permanent options ',
     'optionc': 'both',
     'optiond': 'None',
     'answer': 'a',
     'info': '<a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithOptionGroups.html">Read more </a>'
 },{
       'question': 'Aurora Serverless is available for   ',
       'optiona': 'MySQL compatibility',
       'optionb': 'PostgreSQL compatibility',
       'optionc': 'both',
       'optiond': 'None',
       'answer': 'a',
       'info': '<a href="https://aws.amazon.com/rds/aurora/serverless/">Read more </a>'
   },{
      'question': 'Which  Aurora  DB cluster  automatically starts up, shuts down, and scales up or down its compute capacity based on your application's needs  ',
      'optiona': 'Aurora Serverless DB cluster',
      'optionb': ' provisioned DB cluster',
      'optionc': 'both',
      'optiond': 'None',
      'answer': 'a',
      'info': '<a href="https://aws.amazon.com/rds/aurora/serverless/">Read more </a>'
  },
    {
       'question': 'Which caching strategy adds data or updates data in the cache whenever data is written to the database  ',
       'optiona': 'Lazy Loading',
       'optionb': 'Write-Through',
       'optionc': 'Write-Through with TTL',
       'optiond': 'All of the above',
       'answer': 'b',
       'info': 'Because the data in the cache is updated every time it\'s written to the database, the data in the cache is always current .Adds latency to the process.'
   },
   {
      'question': 'Which  is a fast, reliable, fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets',
      'optiona': 'Redshift ',
      'optionb': 'Neptune ',
      'optionc': ' Quantum Ledger Database',
      'optiond': 'Amazon Keyspaces',
      'answer': 'b',
      'info': '.'
  },
  {
     'question': 'Which  is a is a scalable, highly available, and managed Apache Cassandra–compatible database service.',
     'optiona': 'Redshift ',
     'optionb': 'Neptune ',
     'optionc': ' Quantum Ledger Database',
     'optiond': 'Amazon Keyspaces',
     'answer': 'd',
     'info': '.'
 },
 {
    'question': 'Which  is a fast, fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to efficiently analyze all your data using your existing business intelligence tools',
    'optiona': 'Redshift ',
    'optionb': 'Neptune ',
    'optionc': ' Quantum Ledger Database',
    'optiond': 'Amazon Keyspaces',
    'answer': 'a',
    'info': '.'
},
{
   'question': 'Which  is a fully managed ledger database owned by a central trusted authority that provides a transparent, immutable, and cryptographically verifiable transaction log of all of your application changes',
   'optiona': 'Redshift ',
   'optionb': 'Neptune ',
   'optionc': ' Quantum Ledger Database',
   'optiond': 'Amazon Keyspaces',
   'answer': 'c',
   'info': '.'
},
{
   'question': 'How does Redis implement replication ',
   'optiona': 'With a single shard that contains all of the cluster\'s data in each node—Redis (cluster mode disabled) ',
   'optionb': 'With data partitioned across up to 90 shards—Redis (cluster mode enabled) ',
   'optionc': ' Both ',
   'optiond': 'None',
   'answer': 'c',
   'info': '<a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.Redis.Groups.html"> Read More </a>'
},
{
   'question': 'Each shard in a replication group has a single read/write primary node and up',
   'optiona': '5 read-only replica nodes',
   'optionb': '10 read-only replica nodes',
   'optionc': ' 15 read-only replica nodes ',
   'optiond': 'None',
   'answer': 'a',
   'info': '<a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.Redis.Groups.html"> Read More </a>'
}
  ]
  var title = "Database";
