This write-up first assumes that Git is already installed, if not follow the instructions located here: https://github.com/git-guides/install-git

1) From within VS Code, open a terminal view/command prompt area and type in the following command:

> git version

If this command fails, you do not have Git installed properly and you will need to resolve that before you can do anything else. If it does work and shows you the version of Git that you are using, go to step #2

PREPARE TO CLONE THE PROJECT
============================

2) While I do not know your comfort level with navigating folders/directories on your computer, but you will want to navigate to a folder/directory that you can easily get to and find and within that directory called "Mod_3_Proj", I am giving you this as a directory name to differentiate it from the "Module-3-Project" that will get created when you clone the code for this project, which is currently located on GitHub.

3) Now from within VS Code, you need to launch a "New Window", i.e. from the VS Code menu select "File-> New Window" and then select from the "Start" options that are presented, the "Open Folder"... *** DO NOT SELECT "Open File" *** and then navigate the folder/directory structure of you computer until you get to to the "Mode_3_Proj" folder/directory and then click the "Select Folder" button. Follow the messages until you are back to a new VS Code Window....just close out the "Getting Started" file like we have done before many times before.

NOW IT IS ABOUT TO "GIT" REAL
=============================
You have to follow these next steps carefully if you do not things will get messy and more complicated than they need to be and you will get confused, so consider reading them over once or twice before doing them. 

4) With this new VS Code session start the terminal window by selecting the "Terminal -> New Terminal" from the VS Code menu options

5) From this terminal command prompt type the following command:

> git version

Is it what was observed in step #1? This is a double check to make sure that Git is accessible from the VS Code environment

6) Clone the project's repo with the following command:

> git clone https://github.com/GabrielaLokelani/Module-3-Project.git

After this command is done with its tasks, you will now have a new directory in your VS Code session and it should show up in the EXPLORER view as "Module-3-Project"

7) Now switch into this new folder/directory with the following command:

> cd Module-3-Project

8) *** CRITICAL STEP ALERT *** Always create a new branch before doing ANY KIND OF WORK. To create a new branch use the following command and do take note of the new name of the branch:

> git checkout ISSUE_##_Collaborators_First_Name

By naming the new branch in this manner we, the team, will know that someone is working on a given issue and we should not do the same work as well as letting us know who is actually doing the work in case we had any questions or concerns. Yes, we could look to see who created the branch, but this quick visual of just look at the name of the branch will make life easier for everyone.

9) As a double check to MAKE SURE that you are working on this new branch, type the following command:

> git branch

If things are going well, the "ISSUE_##_Collaborators_First_Name" branch should be listed and highlighted in some manner as to indicate that it is the active branch as well as having an asterisk next to the active branch's name 

CREATING A NEW PROJECT FILE
====================

10) With the proper branch active, now create a new file called "about.html" using the standard HTML 5 template that we have been using in the class to this point and set the tab "title" to "About Pop Pal" and save the changes. Do this at a minimum, feel free to add other information such as an actual header in the body section if you want, but do make sure that you can launch the "about.html" with Live Server and that it views properly as you would expect it to.

11) At this point you created a new file that needs to be added to the project and made available so that everyone else on the project can see it. To do this we must first let Git know that this is a file that we want to keep track of and we do this with the following command from within the VS Code terminal window like we have been doing all the other commands so far:

> git add [filename].[ext]

12) The "git add" command only tells Git that we want to track this file, there is another Git command that we use to let Git know that we have done enough work to "capture" the current state of a given file and this is done with the "git commit" command, so commit this file into the Git database with the following command:

> git commit -m "Initial commit of the about.html" about.html

The "-m" option to the "git commit" command add a message to be associated with the commit and should be descriptive enough as to let others know what changed and/or why the commit was made. Just after the "message" the name of the file or files that are being committed are to be listed.

13) While the "git command" add the file to the Git database located on your local machine, we need one more step to make it visible and accessible by others by getting the code into the repository located on GitHub and this is done with the following Git command:

> git push -u origin ISSUE_##_Collaborators_First_Name

This is where the real beauty of doing things via branching comes into play, while this particular instance only involves a single file and a single commit, as part of the learning process, as things get busier and multiple tasks get done, a single push could include several commits and several files, i.e. we do NOT need to type all those file names over again, just the name of the branch!!! :-) 

NOW ONTO GITHUB
=============

While the next steps can be done in the command line, to keep things simple we will use the GitHub interface as it is easier and provides for a better visual view of what is happening.

14) Without going through the whole process again, I may not be able to provide more detailed instructions, but at this point you will need to create a new pull request based on this new branch "ISSUE_4_Jelkin", so go to the Pull-Request tab on GitHub and click the green button that is titled "Create Pull-Request" or just "Create P-R"...something like that. Then set all the associations on the right hand side of the screen such as: project, milestone, issue, reviewers, etc....the selection process is kind of not so intuitive in that you make the selection(s) and then click somewhere on the page...an area that has nothing on it...and then it will process the selection that you made...WEIRD!?!?!?!

15) Then after people review it, you can then do the actual merge to the "main" branch.

16) Once that is done, the milestones and project tasks automatically update, so peek around see how things change and at this point you are done with this issue! ;-)
