const BusinessSchema = () => {
<JSONLD>

{/* Business Scheme Markup Begins Here */}
{/* Google Search Review Schema Entry Below */}
<Product name="Student Survival Box">
 
 {/* Overall Rating Information To Be Indexed */}
  <AggregateRating ratingValue={4.3} reviewCount={197}/>
  
  {/* Google Schema Collection Type */}
  <GenericCollection type="review">
    
    {/* Review Content To Index Begins Here */}
    <Review name="It's awesome" reviewBody="This is Great! I love the items I recieve every month, and at such a good price!" datePublished="11/22/1963">
      <Author name="Jerry"/>
      <Location name="Falmouth University"/>
      <Rating ratingValue={5} />
    </Review>

  </GenericCollection>
</Product>
</JSONLD>
};
export default BusinessSchema;