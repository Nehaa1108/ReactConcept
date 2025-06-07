import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function Condition() {
// 1 way
  const flag = false


// 2 way
  function renderTextBlock(getFlag)
  {
      return getFlag ? <Button variant="primary">Click</Button> 
      :
      <p>hello world...</p>
  }


  // 3 wayy
  const renderTextBlock1 = flag ?
  (
    <p>method2</p>
  )
    :
    (
      <p>3way</p>
    )


    //4way
    let render4way=null
    if(flag)
    {
      render4way = (
        <p>4way</p>
      )
    }
      else
      {
         <p>
          render4way = (
            <p>4 way---</p>
          )
        </p>
      }


  return (
    <div>
      <h3>Conditional Statement</h3>
      {/* 1 way-- */}
      {
        flag ? (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, unde!</p>
        ) :
        (
          <>Text not Found...</>
        )
      }
      <br></br>


      {/* 2 way-- */}
    
      {renderTextBlock(flag)}


      {/* 3 way-- */}

      {renderTextBlock1}



      {/* 4way-- */}
        {render4way}

      <Card 
      style={{ width: '18rem', marginTop: '1rem' }}
      >
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo quis natus aliquam corrupti nobis perspiciatis modi aut architecto impedit?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Condition;
