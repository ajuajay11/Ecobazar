
function Footer(props){
return(
    <div className="FooterSection_All">
        <ul className="footer_items d-flex">
            <li className="footer_item_terms"><b>{props.FooterCollection.listone}</b></li>
            <li className="">{props.FooterCollection.listtwo}</li>
            <li className="">{props.FooterCollection.listthree}</li>
            <li className=""> {props.FooterCollection.listfour}</li>
        </ul>
    </div>
)
}
export default Footer;