<template>
  <nav>
    <a id="user" href="/profile">My Profile</a>
    <ul v-show="shouldShowDropdown" id="user-dropdown">
      <!-- dropdown content -->
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      shouldShowDropdown: false
    }
  }
}
</script>
