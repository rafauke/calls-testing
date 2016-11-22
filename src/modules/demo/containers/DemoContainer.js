import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ReactTable from 'react-table'
import '!!style-loader!css-loader!react-table/react-table.css';
import style from './DemoContainer.scss';

class DemoContainer extends Component {
  render() {

    const data = [
      {
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      },
    },
      {
        name: 'James Dean',
        age: 34,
        friend: {
          name: 'Alison Rice',
          age: 33,
        },
      }];

    const columns = [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age',
    }, {
      header: 'Friend Name',
      accessor: 'friend.name'
    }, {
      header: 'Friend Age',
      accessor: 'friend.age'
    }];

    return (
      <div className={style.DemoContainer}>
        <h1>
          <FormattedMessage
            id={'demo.title'}
            description={'Demo container title'}
            defaultMessage={'Demo Container'}
          />
        </h1>
        <ReactTable data={ data } columns={columns}/>
      </div>
    );
  }
}

export default DemoContainer;
