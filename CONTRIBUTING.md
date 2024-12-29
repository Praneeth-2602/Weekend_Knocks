# **Contributing Guidelines** 📄  

Thank you for your interest in contributing to **Weekend Knocks**! We welcome contributions from everyone, whether you're a seasoned developer or just getting started. Every contribution, no matter how small, helps us improve and grow this eSports community.  

Please ensure you adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions related to this project.  

---

## **Getting Started** 🤔  

If you're new to open-source contributions, these resources might help:  
- [Forking a Repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)  
- [Cloning a Repository](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)  
- [How to Create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)  
- [Understanding Git and GitHub](https://guides.github.com/introduction/git-handbook/)  

Feel free to reach out to the project maintainers if you need assistance!  

---

## **Issue Reporting Process** 📌  

1. Navigate to the **Issues** section of the repository.  
2. Create a new issue describing the problem or suggestion in detail.  
3. Wait for the maintainers to review and assign the issue to you.  
4. Start working on the issue only after it has been assigned.  

---

## **Steps to Contribute**  

Follow these steps to contribute to the project:  

1. **Fork the Repository**:  
   Click on the "Fork" button at the top-right corner of the repository page to create a copy of the repository in your GitHub account.  

2. **Clone Your Fork**:  
   Clone your forked repository to your local machine.  
   ```bash
   git clone https://github.com/your-username/weekend-knocks.git
   cd weekend-knocks
   ```  

3. **Set Up Environment Variables**:  
   Copy the `.env.example` file to `.env` and configure the required variables.  
   ```bash
   cp .env.example .env
   ```  

4. **Install Dependencies**:  
   ```bash
   npm install
   ```  

5. **Make Your Changes**:  
   Implement your feature, fix bugs, or improve the documentation.  

6. **Lint and Format Your Code**:  
   Run these commands to ensure code quality:  
   ```bash
   npm run lint       # Check for lint errors  
   npm run lint:fix   # Fix lint errors  
   npm run format:fix # Auto-format the code  
   ```  

7. **Commit Your Changes**:  
   ```bash
   git add .  
   git commit -m "Describe your changes briefly"  
   ```  

8. **Push Changes to Your Fork**:  
   ```bash
   git push origin branch-name  
   ```  

9. **Create a Pull Request**:  
   Go to your forked repository on GitHub, click on "Compare & pull request," and provide a detailed description of your changes.  

---

## **Pull Request Guidelines** 🚀  

To streamline the review process, please ensure the following before submitting your pull request:  

1. **Self-Review**: Double-check your code for functionality and clarity.  
2. **Add Descriptions**: Explain the purpose of your changes in the pull request template.  
3. **Comment the Code**: Add comments to clarify complex logic.  
4. **Attach Screenshots**: Include screenshots or GIFs for UI-related changes.  

---

## **Contributors' Page**  

To add yourself to the contributors' page:  

1. Open `src/app/(routes)/contributors/ContributorsData.ts`.  
2. Add your details to the file in the specified format.  
3. Commit and push the changes with your pull request.  

---

## **Support the Project** 🌟  

If you find **Weekend Knocks** helpful, consider starring the repository. Your support motivates us to make this platform even better!  

---

# **Thank You for Contributing!** 💗  
Your efforts make **Weekend Knocks** a vibrant and inclusive community for gamers everywhere. Let's build something amazing together!  
