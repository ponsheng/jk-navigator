var siteitem2 = '
    <div class="container">
    <div class="row">
      <div class="col-5 bg-dark text-white" data-toggle="collapse" data-target="#demo1"> Google </div>
    </div>
    <div class="row">
      <div id="demo1" class="collapse col-5 bg-light text-dark">
        <br>
        <form ction="/action_page.php">
          <div class="form-group">
            <label for="usr">Site Name</label>
            <input type="text" class="form-control" id="usr" name="username">
          </div>
          <div class="form-group">
            <label for="pwd">Regex</label>
            <input type="password" class="form-control" id="pwd" name="password">
          </div>
          <div class="form-group">
            <label for="comment">Selector</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </div>
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember"> Submit to JK
            </label>
          </div>
          <button type="submit" class="btn btn-primary savesite">Save</button>
          <button type="submit" class="btn btn-primary removesite">Remove(add b btn)</button>
          <button type="submit" class="btn btn-primary discard">Discard</button>
        </form>
      </div>
    </div>
</div>
<br>
';
