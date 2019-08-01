#include<stdio.h>

typedef struct Node {
    int data;
    struct Node *next;
}Node;

void insert(int x){
    Node* A = (Node*)malloc(sizeof(x));
    A -> data = x;
    A -> next = head;
    head = A;
}

void print() {
    printf("The ");
}

Node *head;
int main() {
    int x, n;
    head = NULL;
    printf("How many numbers do you want?");
    scanf("%d", &x);
    for(int i = 0; i < x ; i++){
        printf("Enter the number values: ");
        scanf("%d", &n);
        insert(n);
        print();
    }
}