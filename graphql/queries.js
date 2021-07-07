export const homePageQuery = `
                      query {
                        collectionByName(name:"featured"){
                          courses{
                            id
                            name
                            overview
                            imageLarge{
                              uri
                            }
                            subject{
                              name
                            }
                            grade{
                              name
                            }
                          }
                        }
                        grades(first:5){
                          edges{
                            node{
                              id
                              name,
                              image{
                                uri
                              }
                            }
                          }
                        }
                        subjects(first:5){
                          edges{
                            node{
                              id
                              name,
                              image{
                                uri
                              }
                            }
                          }
                        }
                      }
`;

export const customerQuery = `
query sessionCustomer{
  sessionCustomer{
    id,
    fName,
    lName,
    country,
    phone,
    avatar{
      uri
      fileId
    }
  }
}
`;

export const subjectsQuery = `
  query Subjects{
    subjects(first:10){
      edges{
        node{
          id,
          name
        }
      }
    }
  }
`;

export const coursesBySubjectQuery = `
  query($first:Int,$id:String!,$after:ID){
    courses(first:$first,subjectID:$id,after:$after){
      totalCount
      pageInfo{
        hasNextPage
        endCursor
      }
      edges{
        node{
          name
          id
          overview
          grade{
            name
          }
          imageCard{
            uri
          }
        }
      }
    }
  }
`;

export const gradesQuery = `
  query Grades{
    grades(first:10){
      edges{
        node{
          id
        }
      }
    }
  }
`;

export const coursesByGradeQuery = `
  query($first:Int,$id:String!,$after:ID){
    courses(first:$first,gradeID:$id,after:$after){
      totalCount
      pageInfo{
        hasNextPage
        endCursor
      }
      edges{
        node{
          name
          id
          overview
          grade{
            name
          }
          imageCard{
            uri
          }
        }
      }
    }
  }
`;
