import React from 'react'

const Test = () => {
    async function fetchData() {
        try {
          const data = await getData();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      
      async function getData() {
        return {
            name: '김수연',
            id: "dfjskd"
        }
      }
      
      fetchData();
  return (
    <div>test</div>
  )
}

export default Test