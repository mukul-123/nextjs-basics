import Header from './Header'
import Footer from './Footer'

export default function Layout(props){

    return <div className='Layout'>
            <Header />
            <div className="Content">
                {props.children}
            </div>
            <Footer />
        </div>
}