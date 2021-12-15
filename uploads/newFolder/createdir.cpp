#include <bits/stdc++.h>
#include <iostream>
#include <sys/stat.h>
#include <sys/types.h>
using namespace std;
  
int main()
  
{
  
    // Creating a directory
    if (mkdir("/home/zoho/Desktop/hello", 0777) == -1)
        cerr << "Error :  " << strerror(errno) << endl;
  
    else
        cout << "Directory created";
}



// #include<iostream>
// #include<vector>
// #include<string>
// #include<fstream>

// using namespace std;

// string GetStdoutFromCommand(string cmd) {

//   string data;
//   FILE * stream;
//   const int max_buffer = 256;
//   char buffer[max_buffer];
//   cmd.append(" 2>&1");

//   stream = popen(cmd.c_str(), "r");

//   if (stream) {
//     while (!feof(stream))
//       if (fgets(buffer, max_buffer, stream) != NULL) data.append(buffer);
//     pclose(stream);
//   }
//   return data;
// }

// // void getFiles(std::string absPath) {
// //     std::string command = "cd " + absPath + "&& ls -l";
// //     system(command.c_str());
// // }

// int main () {
// //    getFiles("/home/zoho/Desktop"); "/opt/tomcat-10/outFileLin.dat"
//     ofstream outFileLin;
//     outFileLin.open("/home/zoho/Desktop/outFileLin.dat", ios::out | ios::trunc);
//     std::string out = GetStdoutFromCommand("cd /home/zoho/Desktop && ls | xargs stat --printf \"%n:::%A \n\"");
//     // vector<vector<std::string>> outArr;
//     outFileLin << out;
//     cout << out << endl;
//    return 0;
// }