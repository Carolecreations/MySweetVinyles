
<!-- ═══════════════════════════════════════════════════════════
     ENREGISTREMENT DU SERVICE WORKER (mode hors ligne)
     ═══════════════════════════════════════════════════════════ -->
<script>
if("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(reg => console.log("%c✓ Service Worker actif — l'appli fonctionne hors ligne", "color:#C9A86A;font-weight:bold"))
      .catch(err => console.warn("Service Worker indisponible :", err));
  });
}
</script>
  