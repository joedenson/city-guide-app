import React, { Component } from 'react';
import { InfoConsumer } from '../Context';
import Info from '../Info';




class Home extends Component {
    render() {
        return (

            <div className='container'>
                <div className='row mt-5'></div>

                <InfoConsumer>
                    {value => {
                        return value.info.map(item => {
                            return <Info key={item.id} item={item} />
                        })
                    }}

                </InfoConsumer>

            </div>




        )
    }
}


export default Home;
