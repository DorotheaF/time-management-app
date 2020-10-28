<template>
  
  <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">What Class?</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="What Class?" value="ex: MATH" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">What HW?</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="What HW?" value="ex: MATH HW3" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Due Date</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="MM/DD/YYYY" required>
      <div class="invalid-feedback">
        Please provide a valid Date.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">Estimated Time to finish</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="hh/mm" required>
      <div class="invalid-feedback">
        Please provide a valid time.
      </div>
    </div>
    
  </div>
  
   <div onSubmit="return confirm('Do you want to submit?') " 
  <input type="submit" /> </div>

</form>

