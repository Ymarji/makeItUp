<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>About Us</h3>
          <p>
            We are a makeup company that is dedicated to providing high-quality
            makeup products and services to our customers. Our goal is to not
            only meet but exceed your expectations by delivering exceptional
            makeup products that will enhance your natural beauty and make you
            feel confident.
          </p>
        </div>
        <div class="col-md-3">
          <h3>Follow Us</h3>
          <ul class="social-icons">
            <font-awesome-icon :icon="['fab', 'facebook']" class="f_icons" />
            <font-awesome-icon :icon="['fab', 'twitter']" class="f_icons" />
            <font-awesome-icon :icon="['fab', 'instagram']" class="f_icons" />
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  /* max-height: 15vh; */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.row {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
}

.col-md-6 {
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.5rem;
}

p {
  font-size: 0.8rem;
  line-height: 1.5;
}

.social-icons {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.social-icons * {
  margin: 0;
}
.f_icons {
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease;
}
.f_icons:hover {
  font-size: 1.5rem;
  cursor: pointer;
  color: #007bff;
}
</style>
