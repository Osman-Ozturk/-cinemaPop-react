import "../styles/Contact.scss";
const Contact = () => {
  return (
    <div className="contact">

    
    <div className="contactBody">
      <table>
        <tr>
          <th>Name :</th>
          <td>
            <input type="text" required />
          </td>
        </tr>
        <tr>
          <th>Surname :</th>
          <td>
            <input type="text" required />
          </td>
        </tr>
        <tr>
          <th>Email Address :</th>
          <td>
            <input type="email" required />
          </td>
        </tr>
        <tr>
          <th>Phone :</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <th>Address :</th>
          <td>
            <input type="text" required />
          </td>
        </tr>
        <tr>
          <th>
            <label for="story">Tell us your story:</label>
          </th>

          <td>
            <textarea id="story" name="story" rows="6" cols="30">
              
            </textarea>
          </td>
        </tr>
       <tr>
        <td><p className="buttonSubmit">Submit</p></td>
       
        </tr>
      </table>
    </div>
    </div>
  );
};

export default Contact;