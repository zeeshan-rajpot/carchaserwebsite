

import Card from 'react-bootstrap/Card';

const PreviousCars = () => {
    const cardData = [
        { title: 'Card Title 1', year: 2023, km: '123456 km' ,src :"/car1.svg" },
        { title: 'Card Title 2', year: 2023, km: '789012 km', src :"/car1.svg"  },
        { title: 'Card Title 2', year: 2023, km: '789012 km', src :"/car1.svg"  },
        { title: 'Card Title 2', year: 2023, km: '789012 km', src :"/car1.svg"  },
        // Add more data as needed
      ];
  return (
    <>
    <div className='pt-5'>
   <b> Previous Car's</b> 


    </div>



    {cardData.map((data, index) => (
        <Card key={index} className='border-0 shadow rounded-5 mt-3'>
          <Card.Img variant="top" src={data.src} className='py-4 rounded-4' />
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