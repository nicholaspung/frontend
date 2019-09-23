import React, { Component } from "react";
import AdminUserComp from "./AdminUserComp";

export class AdminDashboardComponent extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return <AdminUserComp key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default AdminDashboardComponent;
