import React, {useState} from 'react'
import Payment from './Payment'


export const Plans = () => {
    const [paymentType, setPaymentType] = useState(null);
    const styles = {
        center: {display:'block', alignContent: 'center',textAlign:'center',alignItems:'center'},
        btn:{backgroundColor: '#536DFE', color: '#fff'}
    }

    const onPaymentHandler = type => {
        setPaymentType(type);
    }
    return (
        <div style={{...styles.center, margin:'100px 200px'}}>
            { paymentType!==null ? <Payment type={paymentType}/> :null }
            
            <h1>What You Will Get </h1>
            <div style={{marginTop: '100px'}}>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Features</th>
                        <th scope="col">SILVER</th>
                        <th scope="col">GOLD</th>
                        <th scope="col">DIMOND</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Listen on Android, iOS, and the web</td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                        </tr>
                        <tr>
                            <td>Upload up to 50,000 of your own songs</td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                        </tr>
                        <tr>
                            <td>Radio for your mood, activities and situations</td>
                            <td></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                        </tr>
                        <tr>
                            <td>Ad-free, uninterrupted listening</td>
                            <td></td>
                            <td></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                        </tr>
                        <tr>
                            <td>Access 40 million songs on-demand</td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                            <td><i class="fas fa-dot-circle" style={{color: '#f95838'}}></i></td>
                        </tr>
                        <tr>
                            <td>PRICE</td>
                            <td>Rs.200 /Month</td>
                            <td>Rs.270 /Month</td>
                            <td>Rs.300 /Month</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <div className="row" style={{margin:'50px 70px'}}>
                    <div className="col-md-4">
                        <button className="btn btn" onClick={()=>onPaymentHandler('SILVER',200)} style={styles.btn}>SILVER <i class="fas fa-trophy" style={{color: 'silver'}}></i></button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-default" onClick={()=>onPaymentHandler('GOLD',270)} style={styles.btn}>GOLD <i class="fas fa-trophy" style={{color: 'gold'}}></i></button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-default" onClick={()=>onPaymentHandler('DIAMOD',300)} style={styles.btn}>DIAMOND <i class="fa fa-diamond" aria-hidden="true" style={{color:'#fff'}}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
