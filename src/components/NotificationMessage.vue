<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show"
    role="alert"
  >
    {{ notification.message }}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NotificationMessage",
  props: ["notification"],
  data() {
    return {
      timeout: null
    };
  },
  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    }
  },
  methods: {
    ...mapActions(["removeNotification"])
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },
  beforeCreate() {
    clearTimeout(this.timeout);
  }
};
</script>

<style scoped></style>
