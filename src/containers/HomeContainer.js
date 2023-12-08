import React from 'react'
import {connect} from 'react-redux'
import Home from '../components/Home'
import { addToCart } from '../Services/Actions/Action'

const mapStateToProps=state=>({
    data:state.cardItems

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
