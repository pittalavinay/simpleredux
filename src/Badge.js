import React from 'react'
import {connect} from 'react-redux'
const Badge = ({variable}) => {
  return (
    <div>
        <button type="button" class="btn btn-primary">
  orders<span class="badge bg-danger">{variable.length}</span>
</button>
    </div>
  )
}
const mapStateToProps=state=>(
{
variable:state
})
export default connect(mapStateToProps)(Badge)