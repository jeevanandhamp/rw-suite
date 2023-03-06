<script setup lang="ts">
import { onMounted } from "vue"

import { useAuthStore } from '../stores/auth.store';
import type { CallbackTypes } from "vue3-google-login";
import { decodeCredential, googleLogout  } from "vue3-google-login";

const callback:CallbackTypes.CredentialCallback = (response) => {
    // This callback will be triggered when the user selects or login to
    // his Google account from the popup
    console.log("Handle the response", response);
    console.log("Credential JWT string", response.credential);
    const userData = decodeCredential(response.credential);
    console.log("Handle the userData", userData);
    if(userData) {
        const authStore = useAuthStore();
        authStore.ssoLogin((userData as any).email, response.credential, "sso-google");
    }
}

const error = () => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the error");
};

onMounted(() => {
    googleLogout();
})


</script>

<template>
    <GoogleLogin :callback="callback" :error = "error"/>
</template>
