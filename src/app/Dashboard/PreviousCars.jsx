

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PreviousCars = () => {
    const cardData = [
        { title: 'Swift', year: 2018, km: '123456 km' ,src :"/car1.svg" },
        { title: 'Mercedes-Benz', year: 2021, km: '789012 km', src :"/mer.png"  },
        { title: 'Audi A5', year: 2020, km: '789012 km', src :"/pngegg.png"  },
        // { title: 'Card Title 2', year: 2023, km: '789012 km', src :"/car1.svg"  },
        // Add more data as needed
      ];
  return (
    <>
    <div className='pt-5 d-flex align-items-center  justify-content-between '>
      <div>
      <b> Previous Car's</b> 
      </div>
      <div>
        <Link to='/Previous' className='porange' >
        <b> View All</b> 
        </Link>
  
      </div>


    </div>



    {cardData.map((data, index) => (
        <Card key={index} className='border-0 shadow rounded-5 mt-3'>
          <img variant="top" src={data.src} className=' rounded-4' style={{width:'auto' ,height:'200px'}}/>
          <Card.Body className='pe-0 pb-1' style={{ backgroundColor: '#F5F5F5' }}>
            <div className='d-flex align-items-center justify-content-between'>
              <div>
                <Card.Title>{data.title}</Card.Title>
                <p><b>{data.year}</b></p>
              </div>
              <div>
                <span className='text-light py-2 px-4 rounded-start-5' style={{ background: '#F3B755' }}>
                  {data.km}
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}


    </>
  )
}

export default PreviousCars