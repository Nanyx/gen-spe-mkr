import React from 'react';
import ReactDOM from 'react-dom';

export default new class {
  container = React.createRef();

  toggle = () => {
    console.log("toggle");
  }

  Modal = () => (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div key={this.container} className="modal-body"></div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );

  Body = ({children}) => ReactDOM.createPortal(children, this.container.current);
}();