import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactable';
import { autobind } from 'core-decorators';
import PostForm from 'modules/demo/components/PostForm/PostForm';
import { fetchData, setItemsPerPage, addPost } from 'modules/api/actions';
import style from './DemoContainer.scss';

class DemoContainer extends Component {

  static propTypes = {
    fetchData: PropTypes.func,
    postsList: PropTypes.array,
    itemsPerPage: PropTypes.string,
    setItemsPerPage: PropTypes.func,
    addPost: PropTypes.func,
  };

  @autobind
  onFormSubmit({ postName }) {
    this.props.addPost(postName);
  }

  get tableWithData() {
    if (!this.props || !this.props.postsList.length > 0) {
      return null;
    }

    const data = this.props.postsList;
    return (
      <div>
        <p>Items per page: {this.perPageSelect}</p>
        <Table
          data={data}
          sortable
          itemsPerPage={this.props.itemsPerPage}
          pageButtonLimit={8}
          filterable={['user_name', 'post_title']}
        />
      </div>
    );
  }

  get perPageOptions() {
    const paginationOptions = [5, 10, 15, 20];

    return paginationOptions.map((curOption, index) => (
      <option key={index} value={curOption}>{curOption}</option>
    ));
  }

  get perPageSelect() {
    if (this.props.postsList && this.props.itemsPerPage) {
      return (
        <select
          defaultValue={this.props.itemsPerPage}
          name="perPageAmount"
          id="perPageAmount"
          onChange={(e) => this.props.setItemsPerPage(e.target.value)}
        >{this.perPageOptions}</select>
      );
    }
    return null;
  }

  render() {
    return (
      <div className={style.DemoContainer}>
        <h1>
          Demo Container
        </h1>
        <button role="button" onClick={this.props.fetchData}>Get The Data</button>
        <br /><br />
        {this.tableWithData}
        <br /><br />
        <div>
          <PostForm onSubmit={this.onFormSubmit}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postsList: state.api.postsList.data,
  itemsPerPage: state.api.itemsPerPage,
});
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  setItemsPerPage: (amount) => dispatch(setItemsPerPage(amount)),
  addPost: (post) => dispatch(addPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
