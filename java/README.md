# JAVA

## JAVA Getting Start In VSCode (For Mac OS)

1. [Oracle Java Downloads 접속](https://www.oracle.com/java/technologies/javase-downloads.html)

   - LTS 버전 `macOS Installer`으로 다운 받는다. (M1 동일)

2. 설치 후에 `$ java --version`, `$ javac --version`으로 확인

3. vscode에서 `Java Extension Pack - vscjava.vscode-java-pack` 설치

4. vscode에서 JDK 경로 설정

   - 터미널에서 `$ /usr/libexec/java_home -V` 명령어로 JDK 위치 정보를 찾을 수 있다.
   - vscode setting에 들어가서 `javahome`을 검색한 뒤, `Edit in settings.json`을 클릭하고 경로를 추가한다.

   ```json
   {
     "java.home": "/Library/Java/JavaVirtualMachines/jdk-11.0.12.jdk/Contents/Home",
     "java.configuration.runtimes": [
       {
         "name": "JavaSE-11",
         "path": "/Library/Java/JavaVirtualMachines/jdk-11.0.12.jdk/Contents/Home",
         "default": true
       }
     ]
   }
   ```

5. `helloWorld.java` 파일을 만들고 ">" 실행 버튼을 누르면 프로그램이 잘 실행되는 것을 확인할 수 있다.
