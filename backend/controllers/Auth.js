const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
// const verifyToken = require("../middleware/jwt.js");
const User = require("../model/user.js")
// const createToken = require("../Utils/jwtReset")


exports.postRegister = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
  
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send("User already exists");
      }
  
      // Hacher le mot de passe
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      // Créer un nouvel utilisateur
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      // Sauvegarder l'utilisateur dans la base de données
      await newUser.save();
  
      res.status(201).send("User created");
      console.log(newUser)
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  };
  // exports.test = async (req, res, next) => {
  //   try {
  //     // Rechercher l'utilisateur par email
  //     const { email } = req.body;
      
  //     // Vérifier si l'utilisateur existe
  //     const user = await User.findOne({ email });
  //     if (!user) {
  //       return res.status(404).send('Email inexistant');
  //     }
  
  //     // Créer un jeton de réinitialisation de mot de passe
  //     // const resetToken  = 'createToken();'
      
  //     // console.log(resetToken );
  //     // Ajouter les informations de réinitialisation à l'utilisateur
  //     // user.passwordResetToken = passwordResetToken;
  //     // user.passwordResetExpires = passwordResetExpires;
  
  //     // // Sauvegarder les modifications (jeton et date d'expiration) dans la base de données
  //     // await user.save({ validateBeforeSave: false });
  
  //     // Répondre avec le jeton créé
  //     res.status(200).send('rs');
  //   } catch (error) {
  //     console.error(error); // Afficher l'erreur dans la console pour le débogage
  //     res.status(500).send('Erreur serveur'); // Retourner une réponse d'erreur serveur
  //   }
  // };

  exports.login = async (req,res,next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email}) 
        if(!user.email){
            res.status(404).send('email inexistant')
        } else {
            console.log(user);
        }
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if (!isValidPassword) {
            return res.status(401).send({ message: 'Invalid password' });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWTKEY, { expiresIn: '1h' });

        res.cookie('jwt', token, { httpOnly: true ,maxAge : 24 *60 *60 *1000});

        res.status(200).send({ auth: true, token });
      } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
      }
    }

      // exports.forgotPassword = async (req,res,next) => {
      //   const { email } = req.body.email
      //   const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

      //   const emailExists = await User.findOne({ email });
      //   if(!emailExists){
      //     return res.status(404).send('email inexistant')
      //   }

      //   const passwordReset = new passwordreset({
      //     email,
      //     token
      //   })

      //   await passwordReset.save();
      //   }

      // exports.forgotPassword = async (req, res, next) => {
      //   try {
      //     // Rechercher l'utilisateur par email
      //     const user = await User.findOne({ email: req.body });
      
      //     // Si l'utilisateur n'existe pas, retourner une erreur
      //     if (!user) {
      //       return res.status(404).send('email inexistant');
      //     }
      
      //     // Créer un jeton de réinitialisation de mot de passe
      //     const token = 'token'
      
      //     // Sauvegarder les modifications (jeton et date d'expiration) dans la base de données
      //     // await user.save({ validateBeforeSave: false });
      
      //     // Répondre avec le jeton créé
      //     res.status(200).send({ token });
      //   } catch (error) {
      //     console.error(error); // Afficher l'erreur dans la console pour le débogage
      //     res.status(500).send('Erreur serveur'); // Retourner une réponse d'erreur serveur
      //   }
      // exports.forgotPassword = async (req, res, next) => {
      //   try {
      //     // Rechercher l'utilisateur par email
      //     const { email } = req.body;
      
      //     // Vérifier si l'utilisateur existe
      //     const user = await User.findOne({ email });
      //     if (!user) {
      //       return res.status(404).send('Email inexistant');
      //     }
      //     // Créer un jeton de réinitialisation de mot de passe
      //     // Répondre avec le jeton créé
      //     console.log('work')
      //     res.status(200).send('nice')
      //   } catch (error) {
      //     console.error(error); // Afficher l'erreur dans la console pour le débogage
      //     res.status(500).send('Erreur serveur'); // Retourner une réponse d'erreur serveur
      //   }
      // };
      