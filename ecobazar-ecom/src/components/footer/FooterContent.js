import Footer from "./Footer";
import FooterLists from "./FooterLists";

const FooterContent =FooterLists.map((footerListses, index)=>{
    return(
      <Footer key={index} FooterCollection={{
        listone : footerListses.list1,
        listtwo : footerListses.list2,
        listthree : footerListses.list3,
        listfour : footerListses.list4
      }}/>
    )
  })

export default FooterContent

