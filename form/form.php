<?php
// Fonction pour nettoyer et valider les données du formulaire
function clean_input($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire et les nettoyer
    $name = clean_input($_POST['name']);
    $email = clean_input($_POST['email']);
    $message = clean_input($_POST['message']);

    // Valider les données du formulaire
    $errors = [];

    if (empty($name)) {
        $errors[] = "Le nom est requis.";
    }

    if (empty($email)) {
        $errors[] = "L'e-mail est requis.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "L'e-mail n'est pas valide.";
    }

    if (empty($message)) {
        $errors[] = "Le message est requis.";
    }

    // Vérifier s'il y a des erreurs de validation
    if (empty($errors)) {
        // Composer le corps de l'e-mail
        $subject = "Nouveau message de contact";
        $body = "Nom: $name\n";
        $body .= "Email: $email\n";
        $body .= "Message:\n$message";

        // Adresse e-mail de destination
        $to = "contact@randsted.yn.lu";

        // En-têtes de l'e-mail
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Envoyer l'e-mail
        if (mail($to, $subject, $body, $headers)) {
            // Succès de l'envoi de l'e-mail
            echo "Merci, votre message a été envoyé avec succès.";
        } else {
            // Échec de l'envoi de l'e-mail
            echo "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.";
        }
    } else {
        // Afficher les erreurs de validation
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>
