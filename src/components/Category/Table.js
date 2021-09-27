import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

function Table({ posts, deletId, handleData }) {

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.name}</td>
                <td style={{ backgroundColor: post.color, color: '#ffffff' }}>{post.color}</td>
                <td>
                  <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={() => {
                      handleData(post, index);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete"
                    color="secondary" onClick={() => { deletId(index) }}>
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
