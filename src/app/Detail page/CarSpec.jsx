import React from 'react'

const CarSpec = () => {
    const detailsData = [
        { label: 'Model', value: 'Volkswagen Altas Exceline' },
        { label: 'Year', value: '2009' },
        { label: 'VIN', value: '12566896' },
        { label: 'Make', value: 'Answer' },
        { label: 'Trim', value: 'Answer' },
        { label: 'Mileage/Odometer', value: 'Silver' },
        { label: 'Model', value: '97951km' },
        { label: 'Keys', value: '3' },
        // Add more details as needed
      ];
      const featuresData = [
        '2 sets of tire', 'Window tint', 'Aftermarket exhaust', 'Aftermarket rims', 'Any rust?', 'No exterior damage', 'Dents', 'Scratches',
        'Roof rack', 'Remote starter', 'Aftermarket stereo', 'Aftermarket rims', 'Aftermarket spoiler', 'Any Cracked bodywork', 'Chipped it cracked', 'Paint Chips',
        // Add more features as needed
      ];
  return (
    <>
       <div
              className=' mt-5'
              style={{ height: '590px', overflowY: 'auto' }}
            >
              <div>
      <h2 className='mb-3'>Car full details</h2>
      {detailsData.map((detail, index) => (
        <div key={index} className={index < detailsData.length - 1 ? 'border-bottom' : ''}>
          <p className={`mb-0 ${index > 0 ? ' ' : ''}`}>{detail.label}</p>
          <h5 className='' style={{fontSize:'16px'}}>{detail.value}</h5>
        </div>
      ))}
    </div>
    <div>
      <h2 className='my-3'>Additional Features</h2>
      <span className='flex-wrap  d-flex '>
        {featuresData.map((feature, index) => (
          <div key={index} className='' style={{ flex: '0 0 calc(50% - 1rem)' }}>
            <p className='mb-1 text-nowrap '>{feature}</p>
          </div>
        ))}
      </span>
    </div>
              <div>
                <h2 className='my-3'>Condition & Record</h2>
                <div>
                  <p className='mt-2'>Do you smoke in this vehicle?</p>
                  <h5 className='mb-2'>Yes</h5>
                </div>

                <div>
                  <p className='mt-2'>Do you have original factory rims? </p>
                  <h5 className='mb-2'>Yes</h5>
                </div>
                <div>
                  <p className='mt-2'>Is your vehicle drivable?</p>
                  <h5 className='mb-2'>Yes</h5>
                </div>
                <div>
                  <p className='mt-2'>Any accident claim? </p>
                  <div className='d-flex'>
                    <h5>Yes</h5>
                    <p>Rear damage - $2,000</p>
                  </div>
                </div>
                <div>
                  <p className='mt-2'>Any mechanical issue or warning light?</p>
                  <h5 className='mb-2'>Yes</h5>
                </div>
                <div>
                  <p className='mt-2'>How soon are you ready to sell?</p>
                  <h5 className='mb-2'>Yes</h5>
                </div>
                <div>
                  <p className='mt-2'>
                    Anything you feel we should know about your car
                  </p>
                  <h5 className='mb-2'>Details answer </h5>
                </div>
              </div>
            </div>
    
    </>
  )
}

export default CarSpec