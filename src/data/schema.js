const schema = {
    'title':'Create User Form',
    'type': 'object',
    'properties':
    {
      'Username':{
        'type':'string',
        'title': "Username",
        'default':'Chuck'
      },
      'name':{
        'type':'string',
        'title': "Full Name",
        'default':'John Doe'
      },
      'phone':{
        'type':'string',
        'title': "Phone",
        'default':'Chuck',
        'minLength':10,
        'maxLength':10
      },
      'id':{
        'type':'number',
        'title':'Employee Code'
      },
      'Technology':{
        'type':'string',
        'title': "Technology",
        'enum':["Content","Tech","Finance","Marketing"]
      },
      'Designation':{
        'type':'string',
        'title': "Designation",
      },
      'Joining date':{
        'type':'string',
        'format':'date'
      },
      'Address Type':{
        'type':'string',
        'enum':['Permanent','Current']
      },
      'Address 1':{
        'type':'string'
      },
      'Address 2':{
        'type':'string'
      },
      'State':{
        'type':'string'
      },
      'City':{
        'type':'string'
      },
      'Pincode':{
        'type':'integer'
      },
      'Country':{
        'type':'string',
        'enum':['India','USA','UK',"Russia","China"]

      },
      'Education':{
        'type':'array',
        'description':'Add Education',
        'items':
          {
          'default':'Add Education',
          'properties':{
          'Grade':{
            'type':'string',
            'enum':['10','12','Graduation','Post Graduation']
          },
          'Year':{
            'type':'number'
          },
          'Board':{
            'type':'string'
          },
          'School/University Name':{
            'type':'string'
          },
          'score':{
            'type':'string'
          }
            
        }}
      }
    }
}

  export default schema;