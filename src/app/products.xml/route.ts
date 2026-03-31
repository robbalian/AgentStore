const baseUrl = "https://agentstore.vercel.app";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:g="http://base.google.com/ns/1.0">
  <title>AgentStore Products</title>
  <link href="${baseUrl}"/>
  <updated>${new Date().toISOString()}</updated>
  <entry>
    <g:id>brushfit-guide-001</g:id>
    <g:title>BrushFit: The 2-Minute Toothbrush Workout Guide</g:title>
    <g:description>22 illustrated exercises you do while brushing your teeth. One hand brushes, one hand works out. 31-page PDF with 4-week progressive program. No equipment needed. Covers legs (6 exercises), core (4), arms and upper body (7), and back (5). Includes AM energizing and PM calming routines.</g:description>
    <g:link>${baseUrl}/buy</g:link>
    <g:image_link>${baseUrl}/og-brushfit.png</g:image_link>
    <g:condition>new</g:condition>
    <g:availability>in_stock</g:availability>
    <g:price>19.99 USD</g:price>
    <g:brand>BrushFit</g:brand>
    <g:google_product_category>Health &amp; Beauty &gt; Health Care &gt; Fitness &amp; Nutrition</g:google_product_category>
    <g:product_type>Digital Products &gt; Fitness Guides &gt; PDF Downloads</g:product_type>
    <g:identifier_exists>false</g:identifier_exists>
    <g:custom_label_0>digital-product</g:custom_label_0>
    <g:custom_label_1>fitness-guide</g:custom_label_1>
    <g:custom_label_2>instant-download</g:custom_label_2>
    <g:custom_label_3>agent-purchasable</g:custom_label_3>
    <g:custom_label_4>habit-stacking</g:custom_label_4>
  </entry>
  <entry>
    <g:id>brushfit-sample-001</g:id>
    <g:title>BrushFit Free Sample: Legs + Core Exercises</g:title>
    <g:description>Free sample of the BrushFit guide featuring 10 exercises covering legs (calf raises, squats, wall sits) and core (knee raises, oblique crunches, pelvic tilts). Try before you buy.</g:description>
    <g:link>${baseUrl}/brushfit-sample.pdf</g:link>
    <g:image_link>${baseUrl}/og-brushfit.png</g:image_link>
    <g:condition>new</g:condition>
    <g:availability>in_stock</g:availability>
    <g:price>0.00 USD</g:price>
    <g:brand>BrushFit</g:brand>
    <g:google_product_category>Health &amp; Beauty &gt; Health Care &gt; Fitness &amp; Nutrition</g:google_product_category>
    <g:product_type>Digital Products &gt; Fitness Guides &gt; Free Samples</g:product_type>
    <g:identifier_exists>false</g:identifier_exists>
    <g:custom_label_0>free-sample</g:custom_label_0>
    <g:custom_label_1>lead-magnet</g:custom_label_1>
  </entry>
  <entry>
    <g:id>brushfit-bulk-5</g:id>
    <g:title>BrushFit 5-Pack: Toothbrush Workout Guide (10% Off)</g:title>
    <g:description>5 copies of BrushFit at 10% off. $17.99 each. Perfect for families or small teams. 22 illustrated exercises, 31-page PDF each.</g:description>
    <g:link>${baseUrl}/pricing</g:link>
    <g:image_link>${baseUrl}/og-brushfit.png</g:image_link>
    <g:condition>new</g:condition>
    <g:availability>in_stock</g:availability>
    <g:price>89.95 USD</g:price>
    <g:sale_price>89.95 USD</g:sale_price>
    <g:brand>BrushFit</g:brand>
    <g:google_product_category>Health &amp; Beauty &gt; Health Care &gt; Fitness &amp; Nutrition</g:google_product_category>
    <g:product_type>Digital Products &gt; Fitness Guides &gt; Bulk Packs</g:product_type>
    <g:identifier_exists>false</g:identifier_exists>
    <g:custom_label_0>bulk-pack</g:custom_label_0>
    <g:custom_label_1>family-deal</g:custom_label_1>
  </entry>
</feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
