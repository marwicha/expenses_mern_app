import React from 'react';
import axios from 'axios';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {selectedMonth:'Jan', selectedYear: '2019', allExpenses: []};
    this.getAllExpenses = this.getAllExpenses.bind(this);
  }

  componentDidMount() {
    this.getAllExpenses(this, '2019');
  }
  componentWillReceiveProps(nextProps) {
    this.getAllExpenses(this, '2019');
  }

  getAllExpenses(ev, year) {
    axios.get('/getAll?month=All&year='+year)
      .then(function(response) {
        ev.setState({allExpenses: response.data});
        ev.setState({selectedYear: parseInt(year)})
      });
  }
 
 render() {
    return (
      <div>
        <table>
          <thead>
            <tr><th></th><th className='desc-col'>Description</th>
            <th className='button-col'>Amount</th>
            <th className='button-col'>Month</th>
            <th className='button-col'>Year</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.allExpenses.map((exp) => {
                return  <tr>
                  <td className='counterCell'></td>
                  <td className='desc-col'>{exp.description}</td>
                <td className='button-col'>{exp.amount}</td>
                <td className='button-col'>{exp.month}</td>
                <td className='button-col'>{exp.year}</td>
                </tr>
              })
            }
           </tbody>
         </table>
      </div>
    );
  }
}
