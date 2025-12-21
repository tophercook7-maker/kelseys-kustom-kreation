export default function NetlifyFormsDetector() {
  return (
    <form
      name="custom-orders"
      data-netlify="true"
      encType="multipart/form-data"
      hidden
    >
      <input type="hidden" name="form-name" value="custom-orders" />
      <input name="name" />
      <input name="email" />
      <textarea name="details" />
      <input type="file" name="reference" />
    </form>
  );
}
