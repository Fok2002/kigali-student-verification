document.getElementById('requestForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const message = [
    'Bonjour Kigali Student Verification, je souhaite demander une vérification.',
    'Nom du parent : ' + formData.get('parent'),
    'Téléphone : ' + formData.get('phone'),
    'Nom de l’étudiant : ' + formData.get('student'),
    'Université : ' + (formData.get('university') || 'Non précisée'),
    'Demande : ' + formData.get('topic'),
    'Message : ' + formData.get('message')
  ].join('\n');
  const status = document.getElementById('status');
  status.style.display = 'block';
  status.textContent = 'Votre demande est prête. WhatsApp va s’ouvrir : vérifiez le message puis appuyez sur Envoyer.';
  window.open('https://wa.me/250791376557?text=' + encodeURIComponent(message), '_blank', 'noopener');
});
